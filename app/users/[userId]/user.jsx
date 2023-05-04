import Image from "next/image";

const User = ({ user }) => {
  return (
    <section className="my-6 mx-8 flex gap-20">
      <div className="center">
        <div className="relative h-40 w-40 rounded-full">
          <Image
            src={user?.imageUrl}
            alt={user?.name ?? "profile image"}
            className="inline-block rounded-full"
            fill
          />
        </div>
        <h1>{user?.name}</h1>
        <p>{user?.email}</p>
      </div>
    </section>
  );
};

export default User;
