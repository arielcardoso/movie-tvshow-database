import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TitleItem from './TitleItem'
import { fetchList } from "../actions";

const TitleList = (props) => {

  const {titleList, fetchList} = props;

  useEffect(() => {
    fetchList(props.url);
  }, [fetchList]);

  return (
    <>
      <h2>{props.title}</h2>
      <div className="titles-wrapper">
        {titleList &&
          titleList.map((data) => (
            <TitleItem title={data} />
          ))
        }
      </div>
    </>
  );
}

const mapStateToProps = ({ lists: {titleList} }) => {
  return {titleList}
}

export default connect(mapStateToProps, {fetchList})(TitleList);