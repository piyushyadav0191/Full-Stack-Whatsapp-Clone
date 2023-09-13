import RegisterForm from "../components/auth/RegisterForm";

export default function Register() {
  return (
    <div className="min-h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
      {/*Container*/}
      <div className="flex w-[1600px] mx-auto h-full">
        {/*Register form */}
        <RegisterForm />
      </div>
    </div>
  );
}
