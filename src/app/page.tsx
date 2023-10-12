import Image from 'next/image'
import { CreateTodo } from "@components/CreateTodo";

export default function Home() {
  return (
    <div>
      <CreateTodo />
    </div>
  )
}
