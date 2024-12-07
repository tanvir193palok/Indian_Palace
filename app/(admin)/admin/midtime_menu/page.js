import MenuCategories from "@/components/admin/menu/MenuCategories";
import { categoriesData } from "@/data";

const MidmenuPage = () => {
  //Fetch all categories of mditime menu
  return (
    <>
      <MenuCategories categories={categoriesData} isMainMenu={false} />
    </>
  );
};

export default MidmenuPage;
