interface LayoutPropType {
  children: React.ReactNode;
  gap: boolean;
}
const Layout: React.FC<LayoutPropType> = ({ children, gap }) => {
  return (
    <div
      className={`relative p-12 w-screen h-screen max-w-screen-xl max-h-screen overflow-x-hidden flex flex-col justify-center items-center${
        gap ? "gap-6" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Layout;
