import {Route, Routes} from "react-router-dom";
import React from "react";
import AdminRoute from "./AdminRoute";
import AdminPage from "./AdminPage";
import CreateShopItemPage from "./CreateShopItemPage";


const AdminRouter = () => {
    return (
        <AdminRoute>
            <Routes>
                <Route path="/" element={<AdminPage />} />
                <Route path="/createItem" element={<CreateShopItemPage />} />
                {/*<Route path="create" element={<AdminSubPage1 />} />*/}
            </Routes>
        </AdminRoute>
    );
}

export default AdminRouter;