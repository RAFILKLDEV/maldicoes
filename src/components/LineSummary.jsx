export function LineSummary({ title, page, irPara, destino }) {
  return (
    <div onClick={() => irPara(destino)} className="LineSummary">
      <div>{title}</div>
      <div>
        .......................................................................
      </div>
      <div className="pageNumber">{page}</div>
    </div>
  );
}
