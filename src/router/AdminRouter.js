import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "../layouts";
import { Auth, User, Blog, Cursos, Menu, Newsletter } from "../pages/admin";

const user = null; // Al terminar esto de tiene que volver a poner null
export function AdminRouter() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      {!user ? (
        /* 
          Se hace una validación tipo if para saber si user viene vacío
          En dado caso que venga vacío entrará a Auth por que no está logeado

          Caso contrario entrará a admin/blog o admin/users dependiendo de la ruta
        */
        <Route path="/admin/*" element={<Auth />} />
      ) : (
        <>
          {["/admin", "/admin/blog"].map((path) => (
            <Route
              key={path}
              path={path}
              element={loadLayout(AdminLayout, Blog)}
            />
          ))}
          <Route path="/admin/users" element={loadLayout(AdminLayout, User)} />
          <Route
            path="/admin/cursos"
            element={loadLayout(AdminLayout, Cursos)}
          />
          <Route path="/admin/menu" element={loadLayout(AdminLayout, Menu)} />
          <Route
            path="/admin/newsletter"
            element={loadLayout(AdminLayout, Newsletter)}
          />
        </>
      )}
    </Routes>
  );
}
