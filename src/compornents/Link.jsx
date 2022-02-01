import React from "react";
import { FiUser } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import { FiList } from "react-icons/fi";

class Link extends React.Component {
  render() {
    return (
      <>
        <button>
          <FiUser />
        </button>
        <button>
          <FiStar />
        </button>
        <button>
          <FiList />
        </button>
      </>
    );
  }
}

export default Link;
