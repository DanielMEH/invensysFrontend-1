import axios from "axios";
let urlServer = "http://localhost:5454";
let accessToken = localStorage.getItem("secure_token");
let accesToken1 = localStorage.getItem("token_token1");
let type = localStorage.getItem("type");
export const PostDataUser = async (postDataUser) =>
  await axios.post(`${urlServer}/login`, { postDataUser });
export const postRecoveryEmail = async (email) =>
  await axios.post(`${urlServer}/recovery`, { email });
export const recoverycode = async (data) =>
  await axios.post(`${urlServer}/recoverycode`, { data });
export const newPassword = async (data) =>
  await axios.post(`${urlServer}/newPass`, { data });
export const AuthGoogle = async (data) =>
  await axios.post(`${urlServer}/authgoogleAccount`, { data });
export const PostDataAdmin = async (postDataAdmin) =>
  await axios.post(`${urlServer}/register`, { postDataAdmin });
export const getDataAdmin = async (tokenData) =>
  await axios.post(`${urlServer}/getsataAdminr/${tokenData}`);
export const getDataAll = async () =>
  await axios.get(`${urlServer}/getAdminAll/${accessToken}`);

export const tokenData = async (tokenData, token) =>
  await axios.post(
    `${urlServer}/register`,
    { tokenData },
    {
      headers: {
        "acc-token-data": token,
      },
    }
  );
export const PostDataUserRegister = async (postDataUserRegister) =>
  await axios.post(
    `${urlServer}/registerUser`,
    { postDataUserRegister },
    {
      headers: {
        "acc-token-data": accessToken,
      },
    }
  );
export const UploadcsvUsuario = async (formDataCsv, archivousuariocsv) =>
  await axios.post(
    `${urlServer}/uploadcsvUsers`,
    { formDataCsv, archivousuariocsv },
    {
      headers: {
        "acc-token-data": accessToken,
        "Content-Type": "multipart/form-data",
      },
    }
  );

export const getUsersAdmin = async () =>
  await axios.get(`${urlServer}/getUsersData/${accessToken}`);
export const getDataCountUsersAdmin = async (isAllowedToken) =>
  await axios.get(`${urlServer}/countUsers/${isAllowedToken}`);

export const DeleteuserPost = async (deleteData) =>
  await axios.post(
    `${urlServer}/deleteUser`,
    { deleteData },
    {
      headers: {
        "isallowed-x-token": accessToken,
      },
    }
  );

export const setModule = async (data) =>
  await axios.post(
    `${urlServer}/setModule`,
    { data },
    {
      headers: {
        "isallowed-x-token": accessToken,
      },
    }
  );
export const GetModule = async (id) =>
  await axios.get(`${urlServer}/getModuleUsers/${id}`, {
    headers: {
      "isallowed-x-token": accessToken,
    },
  });
export const DeleteModule = async (id) =>
  await axios.post(
    `${urlServer}/deleteModuleUser`,
    { id },
    {
      headers: {
        "isallowed-x-token": accessToken,
      },
    }
  );
// ? Path: src\apis\ApiData.jsx subir imagen ADMINISTRADORE
export const uploadImg = async (imgData) =>
  await axios.put(
    `${urlServer}/AuploadImageA`,
    { imgData },
    {
      headers: {
        "token-x-id": accessToken,
        "Content-Type": "multipart/form-data",
        // application/x-www-form-urlencoded

        // "Content-Type": "application/x-www-form-urlencoded",


      },
    }
  );

// ? Path: src\apis\ApiData.jsx actualizar datos ADMINISTRADORE

export const UpdateAdminAll = async (data) =>
  await axios.put(
    `${urlServer}/updateAdminALL`,
    { data },
    {
      headers: {
        "token-x-id": accessToken,
      },
    }
  );

// ? post categorias
export const postCategorias = async (data) =>
  await axios.post(
    `${urlServer}/category`,
    { data },
    {
      headers: {
        "x-id-token": accessToken,
      },
    }
  );

// ? delete category
export const deleteCategory = async (id) =>
  await axios.delete(`${urlServer}/category/${id}`, {
    headers: {
      "x-id-token": accessToken,
    },
  });

// ? Path: src\apis\ApiData.jsx obtener todas la categorias
export const getCategorias = async () =>
  await axios.get(`${urlServer}/category/${accessToken}`);

// ? Path: src\apis\ApiData.jsx actualizar categorias
export const updateCategorias = async (id, data) =>
  await axios.put(
    `${urlServer}/category/${id}`,
    { data },
    {
      headers: {
        "x-id-token": accessToken,
      },
    }
  );
// ? obtiene todos los productos
export const getProducts = async () =>
  await axios.get(`${urlServer}/getProducts/${accessToken}`);
// ? insertar productos validación del token
export const postProductos = async (data) =>
  await axios.post(
    `${urlServer}/createProducts`,
    { data },
    {
      headers: {
        "x-id-token": accessToken,
      },
    }
  );

export const deleteproducto = async (id) =>
  await axios.delete(`${urlServer}/deleteProducts/${id}`, {
    headers: {
      "id-token": accessToken,
    },
  });
// ? Update product
export const updateProducto = async (id, data) =>
  await axios.put(
    `${urlServer}/updateProducts/${id}`,
    { data },
    {
      headers: {
        "id-token": accessToken,
      },
    }
  );

export const getProductsId = async (id) =>
  await axios.get(`${urlServer}/getProductsId/${id}`, {
    headers: {
      "id-token": accessToken,
    },
  });

// ? Path: src\apis\ApiData.jsx get Proveedores
export const getProveedores = async () =>
  await axios.get(`${urlServer}/providers/${accessToken}`);

// ? Path: src\apis\ApiData.jsx post Proveedores
export const postProveedores = async (data) =>
  await axios.post(
    `${urlServer}/providers`,
    { data },
    {
      headers: {
        "x-id-token": accessToken,
      },
    }
  );

// ? Path: src\apis\ApiData.jsx delete Proveedores
export const deleteProveedores = async (id) =>
  await axios.delete(`${urlServer}/providers/${id}`, {
    headers: {
      "x-id-token": accessToken,
    },
  });

// ? Path: src\apis\ApiData.jsx update Proveedores
export const updateProveedores = async (id, data) =>
  await axios.put(
    `${urlServer}/providers/${id}`,
    { data },
    {
      headers: {
        "x-id-token": accessToken,
      },
    }
  );

// ? Path: src\apis\ApiData.jsx get datos de su negocio
export const getBusiness = async () =>
  await axios.get(`${urlServer}/modules/${accessToken}`);

// ? Path: src\apis\ApiData.jsx obtiene todos los servicios datos dek usuario
export const getServices = async (id) =>
  await axios.get(`${urlServer}/serviceId/${id}`);

//  ? Path: src\apis\ApiData.jsx obtine todas las motificaciones
export const getNotification = async () =>
  await axios.get(`${urlServer}/notification/${accessToken}`);

// ? Path: src\apis\ApiData.jsx DELETE motificaciones
export const deleteNotification = async (id) =>
  await axios.delete(`${urlServer}/notification/${id}`);

// ? Path: src\apis\ApiData.jsx get inventario
export const getInventario = async () =>
  await axios.get(`${urlServer}/inventory/${accessToken}`);

// ? Path: src\apis\ApiData.jsx post inventario
export const postInventario = async (data) =>
  await axios.post(
    `${urlServer}/inventory`,
    { data },
    {
      headers: {
        authorization: accessToken,
        typeAutorization: type,
        authorization1: accesToken1,
      },
    }
  );

// ? Path: src\apis\ApiData.jsx delete inventario
export const deleteInventario = async (id) =>
  await axios.delete(`${urlServer}/inventory/${id}`, {
    headers: {
      authorization: accessToken,
    },
  });
// ? Path: src\apis\ApiData.jsx update inventario
export const updateInventario = async (id, data) =>
  await axios.put(
    `${urlServer}/inventory/${id}`,
    { data },
    {
      headers: {
        authorization: accessToken,
      },
    }
  );

// ? Path: src\apis\ApiData.jsx get ventas
export const UploadSubProducts = async (id, data) =>
  await axios.post(
    `${urlServer}/subProducts`,
    { data },
    {
      headers: {
        authorization: accessToken,
      },
    }
  );

export const getSubProducts = async (id) =>
  await axios.get(`${urlServer}/subProducts/${id}`, {
    headers: {
      authorization: accessToken,
    },
  });

export const TodoFunctions = {
  // ? Path: src\apis\ApiData.jsx Translate Products
  translateProducts: async (data) =>
    await axios.post(
      `${urlServer}/translateProducts`,
      { data },
      {
        headers: {
          authorization: accessToken,
        },
      }
    ),

  // ? Path: src\apis\ApiData.jsx Get Translate Products
  getTranslateProducts: async (id) =>
    await axios.get(`${urlServer}/translateProducts/${id}`, {
      headers: {
        authorization: accessToken,
      },
    }),

  // ? Path: src\apis\ApiData.jsx updateSubproduct with TranslateProduct

  updateSubproduct: async (id, data) =>
    await axios.put(
      `${urlServer}/translateSubProducts/${id}`,
      { data },
      {
        headers: {
          authorization: accessToken,
        },
      }
    ),

  updateBodegaEmail: async (id, data) =>
    await axios.put(
      `${urlServer}/updateEmailBodega/${id}`,
      { data },
      {
        headers: {
          authorization: accessToken,
        },
      }
    ),

    postPedidos: async (data)=> await axios.post(`${urlServer}/pedidos`,{data},{

      headers: {
        authorization: accessToken,
      },
    }),
    postCompras: async (data) => await axios.post(`${urlServer}/compras`, { data }, {
      headers: {
        authorization: accessToken,
      },
    }),

};
