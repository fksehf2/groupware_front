const LogDtlPop = () => {
  return (
    <div id="con_wrap_pop">
      <div className="contents">
        <div id="contents_info">
          {/* <!--- contnets  적용 ------> */}
          <div className="window_popup">
            <div className="sub_ttl">상세 로그 확인</div>

            <div classNameName="sub">
              {/* <!--------------검색------------------> */}
              <form name="insForm" id="insForm" method="post">
                {/* <c:out value="${paramMap.srcRequstId}" /> */}
                <input type="hidden" id="srcRequstId" name="srcRequstId" value="" />
                <div className="t_list">
                  <table className="iptTblX">
                    <caption>상세</caption>
                    <colgroup>
                      <col width="20%" />
                      <col width="*" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">ID</th>
                        <td>
                          <span id="rqesterId" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">메뉴명</th>
                        <td>
                          <span id="menuNm" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">URL</th>
                        <td>
                          <span id="url" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">등록일</th>
                        <td>
                          <span id="occrrncDeDt" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">IP</th>
                        <td>
                          <span id="rqesterIp" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">PARAM</th>
                        <td>
                          <span id="rqesterParam" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <!---  //contnets  적용 ------> */}
      </div>
    </div>
  );
};

export default LogDtlPop;
