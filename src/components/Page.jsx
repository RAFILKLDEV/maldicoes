export function Page({ children, title }) {
  return (
    <>
      <div className="Book">
        <div className="Page">
          <div className="Page-Content">
            <h2>{title}</h2>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
