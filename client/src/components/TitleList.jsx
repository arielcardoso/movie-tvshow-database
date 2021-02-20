import React, { useEffect } from "react";
import { connect } from "react-redux";
import TitleItem from './TitleItem'
import { fetchList } from "../actions";

const TitleList = ({ titleList, fetchList}) => {

    useEffect(() => {
      fetchList();
    }, [fetchList]);

		return (
        <div className="TitleList" >
          <div className="Title">
            <h1>Top TV picks for Jack</h1>
            <div className="titles-wrapper">
              {titleList &&
                titleList.reverse().map((data) => (
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