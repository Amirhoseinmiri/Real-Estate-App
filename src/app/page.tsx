import { Button, Input } from "antd";

export default function Home() {
  return (
    <div className="p-20 flex flex-col gap-10 ">
      <Button type="primary">Home Page</Button>
      <Button type="text">Home Page</Button>
      <Input type="number" placeholder="black" />
    </div>
  );
}
