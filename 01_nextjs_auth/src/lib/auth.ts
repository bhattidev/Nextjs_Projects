import { id } from "./../../node_modules/next-auth/client/__tests__/helpers/mocks.d";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import connectDb from "./db";
import User from "../model/user.model";
import bcrypt from "bcryptjs";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        let email = credentials?.email;
        let password = credentials?.password;
        if (!email || !password) {
          throw new Error("email or password is not found");
        }
        await connectDb();
        let user = await User.findOne({ email });
        if (!user) {
          throw new Error("user not found");
        }
        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          throw new Error("Incorrect Password");
        }

        return {
          id: user._id,
          name: user.name,
          email: user.email,
          image: user.image,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        (token.id = user.id), (token.name = user.name);
        token.email = user.email;
        token.image = user.image || null;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image as string;
      }
    },
  },
  session: {},
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
