"use client";

import { useState, useEffect } from "react";

interface Data {
  _id: string;
  production: number;
  target: number;
}

export default function Home() {
  const [production, setProduction] = useState(0);
  const [target, setTarget] = useState(0);
  const [allData, setAllData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const res = await fetch("/api/production");
    const json = await res.json();
    if (json.success) setAllData(json.data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/production", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ production, target }),
    });
    const json = await res.json();
    if (json.success) {
      setProduction(0);
      setTarget(0);
      fetchData();
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Production Input</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-sm gap-4 mb-8"
      >
        <input
          type="number"
          placeholder="Production"
          value={production}
          onChange={(e) => setProduction(Number(e.target.value))}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Target"
          value={target}
          onChange={(e) => setTarget(Number(e.target.value))}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </form>

      <h2 className="text-xl font-bold mb-4">Saved Data</h2>
      <div className="flex flex-col gap-2 max-w-md">
        {allData.map((item) => (
          <div
            key={item._id}
            className="p-2 border rounded flex justify-between"
          >
            <span>Production: {item.production}</span>
            <span>Target: {item.target}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
