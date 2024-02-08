const EqpDtlInfo = (props) => {
  console.log(props.eqpTyp);
  return (
    <>
      {props.eqpTyp === "C05001" ? (
        <table className="iptTblX">
          <colgroup>
            <col width="15%" />
            <col width="35%" />
            <col width="15%" />
            <col width="35%" />
          </colgroup>
          <tbody id="devEqp">
            <tr>
              <th scope="row">CPU</th>
              <td>
                <input id="cpu" name="cpu" type="text" maxLength="50" />
              </td>
              <th scope="row">메모리</th>
              <td>
                <input id="ram" name="ram" type="text" maxLength="50" />
              </td>
            </tr>
            <tr>
              <th scope="row">HDD용량</th>
              <td>
                <input id="hddVol" name="hddVol" type="text" maxLength="50" />
              </td>
              <th scope="row">SDD용량</th>
              <td>
                <input id="ssdVol" name="ssdVol" type="text" maxLength="50" />
              </td>
            </tr>
            <tr>
              <th scope="row">그래픽카드</th>
              <td colspan="3">
                <input id="graphics" name="graphics" type="text" maxLength="50" />
              </td>
            </tr>
          </tbody>
        </table>
      ) : props.eqpTyp === "C05003" ? (
        <table className="iptTblX">
          <colgroup>
            <col width="15%" />
            <col width="35%" />
            <col width="15%" />
            <col width="35%" />
          </colgroup>
          <tbody id="moniEqp">
            <tr>
              <th scope="row">모니터크기</th>
              <td>
                <input id="mntrSize" name="mntrSize" type="text" maxLength="50" />
              </td>
              <th scope="row">해상도</th>
              <td>
                <input id="mntrRes" name="mntrRes" type="text" maxLength="50" />
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <></>
      )}
    </>
  );
};

export default EqpDtlInfo;
