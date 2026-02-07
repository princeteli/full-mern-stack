import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Payment[]> => {
  return [
    {
      id: 1,
      amount: 200,
      username: "prince",
      email: "pr12@mail.com",
      status: "pending",
    },
    {
      id: 2,
      amount: 350,
      username: "alice",
      email: "alice@mail.com",
      status: "paid",
    },
    {
      id: 3,
      amount: 120,
      username: "bob",
      email: "bob@mail.com",
      status: "failed",
    },
    {
      id: 4,
      amount: 500,
      username: "charlie",
      email: "charlie@mail.com",
      status: "pending",
    },
    {
      id: 5,
      amount: 420,
      username: "diana",
      email: "diana@mail.com",
      status: "paid",
    },
    {
      id: 6,
      amount: 310,
      username: "ethan",
      email: "ethan@mail.com",
      status: "failed",
    },
    {
      id: 7,
      amount: 150,
      username: "fiona",
      email: "fiona@mail.com",
      status: "pending",
    },
    {
      id: 8,
      amount: 275,
      username: "george",
      email: "george@mail.com",
      status: "paid",
    },
    {
      id: 9,
      amount: 180,
      username: "hannah",
      email: "hannah@mail.com",
      status: "failed",
    },
    {
      id: 10,
      amount: 230,
      username: "ian",
      email: "ian@mail.com",
      status: "pending",
    },
    {
      id: 11,
      amount: 295,
      username: "julia",
      email: "julia@mail.com",
      status: "paid",
    },
    {
      id: 12,
      amount: 165,
      username: "karl",
      email: "karl@mail.com",
      status: "failed",
    },
    {
      id: 13,
      amount: 210,
      username: "lisa",
      email: "lisa@mail.com",
      status: "pending",
    },
    {
      id: 14,
      amount: 440,
      username: "mike",
      email: "mike@mail.com",
      status: "paid",
    },
    {
      id: 15,
      amount: 360,
      username: "nina",
      email: "nina@mail.com",
      status: "failed",
    },
    {
      id: 16,
      amount: 190,
      username: "oliver",
      email: "oliver@mail.com",
      status: "pending",
    },
    {
      id: 17,
      amount: 330,
      username: "paula",
      email: "paula@mail.com",
      status: "paid",
    },
    {
      id: 18,
      amount: 140,
      username: "quentin",
      email: "quentin@mail.com",
      status: "failed",
    },
    {
      id: 19,
      amount: 220,
      username: "rachel",
      email: "rachel@mail.com",
      status: "pending",
    },
    {
      id: 20,
      amount: 390,
      username: "steve",
      email: "steve@mail.com",
      status: "paid",
    },
  ];
};

const paymentPage = async () => {
  const data = await getData();
  return (
    <div>
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default paymentPage;
