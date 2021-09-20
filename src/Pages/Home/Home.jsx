import React from "react";
const Home = () => {
  return (
    <>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://www.emprendedores.es/wp-content/uploads/2018/09/mascotas-1024x576.jpg')",
          height: 500,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
            <h1 className="mb-3">Inico</h1>
              <h4 className="mb-3">Pexshop</h4>
              <a
                className="btn btn-outline-light btn-lg"
                href="#!"
                role="button"
              >
                Mascotas
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
