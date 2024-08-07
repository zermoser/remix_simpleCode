import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "สวัสดีจ้า 🏳️‍🌈" },
    { name: "ทดสอบระบบจร้า", content: "สวีดัส สวัสดี อิอิ" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4 bg-slate-800 h-screen text-white">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <h1 className="text-3xl">Hello World</h1>
      <h1 className="text-3xl">Hello ระเบิดเวลา อร๊ากกกกก</h1>
      <h1 className="text-3xl">Hello ทดสอบระบบตอนแตกกิ่ง feat/test</h1>
    </div>
  );
}
