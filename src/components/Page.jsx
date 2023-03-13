export function Page({ children, title, irPara, destino, pageNumber }) {
  return (
    <>
      <div className="Book">
        <div className="Page">
          <div className="Page-Content">
            <h2 onClick={() => irPara(destino)}>{title}</h2>
            {children}
          </div>
          <div className="PageNumber">{pageNumber}</div>
        </div>
      </div>
    </>
  );
}
