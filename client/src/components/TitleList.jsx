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
        <div className="TitleList" >
          <div className="Title">
            <h1>{props.title}</h1>
            <div className="titles-wrapper">
              {titleList &&
                titleList.map((data) => (
                  <TitleItem title={data} />
                ))
              }
            </div>
          </div>
        </div>
		);
}

const mapStateToProps = ({ lists: {titleList} }) => {
  return {titleList}
}

export default connect(mapStateToProps, {fetchList})(TitleList);