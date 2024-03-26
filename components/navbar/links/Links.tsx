import NavLink from "./navLink/NavLink";

const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Members",
      path: "/members",
    },
    {
      title: "FAQ",
      path: "/faq",
    },
  ];

  return (
    <div className="flex justify-between gap-14 items-center">
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
    </div>
  );
};

export default Links;
