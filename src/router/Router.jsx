import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthUser } from "../components/AuthUser";
import { Signup } from "../components/Signup";
import { UserContextData } from "../hooks/context/UserContextData";
import { Admin } from "../pages/Admin/Admin";
import { HomePage } from "../pages/HomePage";
import { ProtectedRouter } from "../auth/ProtectedRouter";
import RecoveryPass from "../pages/RecoveryPass";
import CodePassword from "../pages/CodePassword";
import NewPassword from "../pages/newPassword";
import { Inventory } from "../layout/Inventory";
import { NotFount } from "../pages/NotFount";
import Header from "../components/Header";
import { Category } from "../layout/Category";
import { Usuarios } from "../layout/Usuarios";
import { Notification } from "../layout/Notification";
import { Product } from "../layout/Product";
import { Provider } from "../layout/Provider";
import { Analitycs } from "../layout/Analitycs";
import { Perfil } from "../layout/Perfil";
import { Shope } from "../layout/Shope";
import { Prueba } from "../layout/Prueba";
import { GetUsersContext } from "../hooks/context/GetUsersContext";
import { Somos } from "../pages/Somos";
import { Contactanos } from "../pages/Contactanos";
import { ModalModule } from "../components/ModalModule";
import axios from "axios";
import { PlanificCalendar } from "../layout/PlanificCalendar";
import { AyudaAdmin } from "../layout/AyudaAdmin";
import { EditarProduct } from "../components/FormProduct/EditarProduct";
import { Ventas } from "../layout/Ventas";
import { HomeDaboard } from "../components/screen/HomeDaboard";
import { ProductoDasboard } from "../components/screen/ProductoDasboard";
import { CategoryDasboard } from "../components/screen/CategoryDasboard";
import { ProvidersDasboard } from "../components/screen/ProvidersDasboard";
import { GetCategoryProvider } from "../components/screen/GetCategoryProvider";
import { UsersDasboard } from "../components/screen/UsersDasboard";
import { UserInfo } from "../components/screen/UserInfo";
import { UsersNotification } from "../components/NotificationsHeader/UsersNotification";
import { HomeNotification } from "../components/NotificationsHeader/HomeNotification";
import { ProductNotification } from "../components/NotificationsHeader/ProductNotification";
import { InventoryNotify } from "../components/NotificationsHeader/InventoryNotify";
import { CategoryNotify } from "../components/NotificationsHeader/CategoryNotify";
import { ProviderNotifyc } from "../components/NotificationsHeader/ProviderNotifyc";
import { PedidosNotify } from "../components/NotificationsHeader/PedidosNotify";
import { VentasNotify } from "../components/NotificationsHeader/VentasNotify";
import { ConfigInventory } from "../container/ConfigInventory";
import inventoryImg from "../assets/img/inventorys.jpg";
import { TranslateProduct } from "../container/TranslateProduct";
export const Router = () => {
  const [usersP, setUsersP] = useState([]);
  const token = localStorage.getItem("secure_token");
  const token1 = localStorage.getItem("token_token1");
  let type = localStorage.getItem("type");
  let usersData = {
    tokeVerify: "",
    permisions: [],
  };

  if (type === "user") {
    const Webk = () => {
      useEffect(() => {
        async function getModulesUser() {
          const response = await axios.get(
            `http://localhost:3002/getMod/${token1}`
          );

          const modules = response.data.data;
          console.log(modules);
          modules.map((item) => {
            return setUsersP([...usersP, usersP.push(item.titulo)]);
          });
        }
        getModulesUser();
      }, []);
    };
    Webk();
    let toke = token ? token : null;
    usersData.tokeVerify = toke;
    usersData.permisions = usersP;
  }

  if (type === "superAdmin") {
    let tokeVerify = token ? token : null;
    usersData.permisions = [
      "superAdmin",
      "bodega",
      "categoria",
      "usuario",
      "notificacion",
      "producto",
      "proveedor",
      "pedidos",
      "analityc",
      "perfil",
      "dasboard",
      "shope",
      "ayudaAdmin",
      "venta",
    ];
    usersData.tokeVerify = tokeVerify;
  }

  const [users, setUsers] = useState(usersData);

  return (
    <>
      <UserContextData>
        <GetUsersContext>
          <Routes>
            <Route path="/prueba" element={<Prueba />} />
            <Route path="*" element={<NotFount />} />

            <Route path="/login" element={<AuthUser />} />
            <Route path="/Header" element={<Header />} />
            <Route path="/newPassword+auth=true" element={<NewPassword />} />
            <Route
              path="/recovery+password/identify"
              element={<RecoveryPass />}
            />
            <Route path="/verifyc+code/identify" element={<CodePassword />} />
            <Route path="/signup" element={<Signup />} />

            <Route index element={<HomePage />} />
            <Route
              path="/bodega/*"
              element={
                <ProtectedRouter
                  isAllowed={!!users && users.permisions.includes("bodega")}
                  redirectTo="/bodega"
                >
                  <Inventory />
                </ProtectedRouter>
              }
            >
              <Route path="inventory/:id/*" element={<ConfigInventory />}>
                <Route
                  path="TrasladarProduct/:id"
                  element={<TranslateProduct />}
                />
              </Route>
              <Route
                path=""
                element={
                  <div>
                    <img
                      src="https://res.cloudinary.com/dkqp3wkbi/image/upload/v1681822432/stored/11668796_20945371-removebg-preview_ja7xon.png"
                      alt="inventory"
                      width={"50%"}
                      height={200}
                      style={{ margin: "auto" }}
                    />
                  </div>
                }
              />
            </Route>
            <Route
              path="/ayudaAdmin"
              element={
                <ProtectedRouter
                  isAllowed={!!users && users.permisions.includes("ayudaAdmin")}
                >
                  <AyudaAdmin />
                </ProtectedRouter>
              }
            />
            <Route
              path="/categorias"
              element={
                <ProtectedRouter
                  isAllowed={!!users && users.permisions.includes("categoria")}
                  redirectTo="/categorias"
                >
                  <Category />
                </ProtectedRouter>
              }
            />
            <Route
              path="/dasboard/*"
              element={
                <ProtectedRouter
                  isAllowed={!!users && users.permisions.includes("dasboard")}
                >
                  <Admin />
                </ProtectedRouter>
              }
            >
              <Route path="" element={<HomeDaboard />} />
              <Route path="users/:id/*" element={<UsersDasboard />}>
                <Route path="usersInfo/:id" element={<UserInfo />} />
              </Route>
              <Route path="productos/:id" element={<ProductoDasboard />} />
              <Route path="categorias/:id" element={<CategoryDasboard />} />

              <Route path="proveedores/:id/*" element={<ProvidersDasboard />}>
                <Route
                  path="categoryProvider/:id"
                  element={<GetCategoryProvider />}
                />
              </Route>
            </Route>
            <Route
              path="/usuarios"
              element={
                <ProtectedRouter
                  isAllowed={!!users && users.permisions.includes("usuario")}
                  redirectTo="/usuarios"
                >
                  <Usuarios />
                </ProtectedRouter>
              }
            />

            <Route
              path="/permisions/:id"
              element={
                <ProtectedRouter
                  isAllowed={!!users && users.permisions.includes("superAdmin")}
                  redirectTo="/bodega"
                >
                  <ModalModule />
                </ProtectedRouter>
              }
            />
            <Route
              path="/notificaciones/*"
              element={
                <ProtectedRouter
                  isAllowed={
                    !!users && users.permisions.includes("notificacion")
                  }
                  redirectTo="/notificaciones"
                >
                  <Notification />
                </ProtectedRouter>
              }
            >
              <Route path="" element={<HomeNotification />} />
              <Route
                path="notification/users"
                element={<UsersNotification />}
              />
              <Route
                path="notification/product"
                element={<ProductNotification />}
              />
              <Route
                path="notification/inventario"
                element={<InventoryNotify />}
              />
              <Route
                path="notification/category"
                element={<CategoryNotify />}
              />
              <Route
                path="notification/provider"
                element={<ProviderNotifyc />}
              />
              <Route path="notification/pedidos" element={<PedidosNotify />} />
              <Route path="notification/ventas" element={<VentasNotify />} />
            </Route>
            <Route
              path="/admin/productos/editar/:id"
              element={
                <ProtectedRouter isAllowed={!!users} redirectTo="/bodega">
                  <EditarProduct />
                </ProtectedRouter>
              }
            />
            <Route
              path="/producto"
              element={
                <ProtectedRouter
                  isAllowed={!!users && users.permisions.includes("producto")}
                  redirectTo="/producto"
                >
                  <Product />
                </ProtectedRouter>
              }
            />
            <Route
              path="/categoria"
              element={
                <ProtectedRouter
                  isAllowed={!!users && users.permisions.includes("categorias")}
                  redirectTo="/categoria"
                >
                  <Category />
                </ProtectedRouter>
              }
            />
            <Route
              path="/proveedor"
              element={
                <ProtectedRouter
                  isAllowed={!!users && users.permisions.includes("proveedor")}
                  redirectTo="/proveedor"
                >
                  <Provider />
                </ProtectedRouter>
              }
            />
            <Route
              path="/analityc"
              element={
                <ProtectedRouter
                  isAllowed={!!users && users.permisions.includes("analityc")}
                  redirectTo="/analityc"
                >
                  <Analitycs />
                </ProtectedRouter>
              }
            />
            <Route
              path="/perfil"
              element={
                <ProtectedRouter
                  isAllowed={!!users && users.permisions.includes("superAdmin")}
                >
                  <Perfil />
                </ProtectedRouter>
              }
            />
            <Route
              path="/pedidos/*"
              element={
                <ProtectedRouter
                  isAllowed={!!users && users.permisions.includes("pedidos")}
                  redirectTo="/pedidos"
                >
                  <Shope />
                </ProtectedRouter>
              }
            >
              <Route path="bodega/:id" element={<h1>Hola mundo</h1>} />
            </Route>

            <Route
              path="/venta/*"
              element={
                <ProtectedRouter
                  isAllowed={!!users && users.permisions.includes("venta")}
                  redirectTo="/venta"
                >
                  <Ventas />
                </ProtectedRouter>
              }
            >
              <Route path="bodega/:id" element={<h1>Hola mundo</h1>} />
            </Route>
            <Route path="/somos" element={<Somos />} />
            <Route path="/contactanos" element={<Contactanos />} />
          </Routes>
        </GetUsersContext>
      </UserContextData>
    </>
  );
};
