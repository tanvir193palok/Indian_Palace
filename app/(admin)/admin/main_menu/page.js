import MenuCategories from "@/components/admin/menu/MenuCategories";
import { categoriesData } from "@/data";

const MainmenuPage = () => {
  //Fetch all categories of main menu
  return (
    <>
      <MenuCategories categories={categoriesData} isMainMenu={true} />
    </>
  );
};

export default MainmenuPage;
