// React
import { useHistory } from "react-router";
import React, { useState, useEffect } from "react";
// OTHERS
import NavigationBar from "./../../nav-bar/NavigationBar";
import CommonTable from "./../../common/CommonTable";
import Loading from "./../../common/Loading"
import i18n from "./../../../i18n/i18n";
import getTableModel from "./TableModel";
import { handleGet } from "./../../handle/HandleManager";
import "./../../common/Table.css";

const Table = (props) => {

  // Declare constant
  const [course] = useState(props.location.state.data);
  const [arrayData, setArrayData] = useState();
  const history = useHistory();

  // Hooks
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      handleGet(`courses/${course.id}/students`, setArrayData);
    }
    return () => { isMounted = false };
  }, [course]);

  if (arrayData === undefined) {
    return <Loading></Loading>;
  }

  const navigate= (row) => {
    let  path = "/score-course-student-subject";
    history.push({ 
      pathname: path,
      state: { 
        student: row,
        course,
        edit: true
      }
    })
  }

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container col-md-12">
        <div className="card card-table">
          <div className="card-header">
            <h3 align="center">{i18n.common.TitleScore}</h3>
            <h3 align="center">{i18n.scoreHeadTable.headCourse + course.name}</h3>
            <h4 align="center">{i18n.scoreHeadTable.headSelectStudent}</h4>
          </div>
          <div className="card-body card-body-table">
            <CommonTable 
              tableTitle = {[
                i18n.common.TitleScore, 
                i18n.scoreHeadTable.headCourse + course.name
              ]}
              arrayExcluded = {[
                'add'
              ]}
              arrayData={arrayData} 
              columns={getTableModel(navigate)}>
            </CommonTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
