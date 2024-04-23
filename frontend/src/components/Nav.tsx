import { Link } from "@tanstack/react-router";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between p-2 bg-primary-950 border-b-2 border-b-primary-900">
      <div className="flex items-center gap-2 text-neutral-200">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/projects" >Project</Link>
        <Link to="/repositories" >Repository</Link>
        <Link to="/issues" >Issue</Link>
      </div>
    </nav>
  );
}
{/* {user ? <ProfileButton /> : <LoginButton />} */ }

// const ProfileButton = () => {
//   const { user } = useAuth0();
//   return (
//     <details className=" relative">
//       <summary className="">
//         {user?.picture ? (
//           <img src={user.picture} alt="" className="w-12 rounded-md" />
//         ) : (
//           <img
//             src="https://avatar.iran.liara.run/public"
//             alt=""
//             className="w-12 rounded-md"
//           />
//         )}
//       </summary>
//       <ul className="absolute right-4 flex-col rounded-sm border border-[#2a3449">
//         <LogoutButton />
//       </ul>
//     </details>
//   );
// };
