interface LayoutPropType {
  children: React.ReactNode;
  gap: boolean;
}
const Layout: React.FC<LayoutPropType> = ({ children, gap }) => {
  return (
    <div
      className={`p-12 w-screen h-screen max-w-screen-xl max-h-screen overflow-x-hidden flex justify-center items-center ${
        gap ? "gap-6" : ""
      }`}
    >
      <div
        className={`relative w-full max-w-full h-full flex flex-col  ${
          gap ? "gap-6" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
