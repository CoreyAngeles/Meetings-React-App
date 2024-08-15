import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Bookmark from "./Bookmark";
import PropTypes from "prop-types";
import QualitiesList from "./QualitiesList";
import Table from "./Table";
import { Link } from "react-router-dom";

const UsersTable = (props) => {
  const { users, onDelete, onToggleBookMark, onSort, selectedSort } = props;
  const columns = {
    name: {
      path: "name",
      name: "Имя",
      component: (user) => <Link to={`/users/${user._id}`}>{user.name}</Link>,
    },
    qualities: {
      name: "Качества",
      component: (user) => <QualitiesList qualities={user.qualities} />,
    },
    professions: { path: "profession.name", name: "Профессия" },
    completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
    rate: { path: "rate", name: "Оценка" },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      component: (user) => (
        <Bookmark
          status={user.bookmark}
          id={user._id}
          onToggleBookMark={onToggleBookMark}
        />
      ),
    },
    delete: {
      component: (user) => (
        <button
          className="btn btn-danger"
          onClick={() => {
            onDelete(user._id);
          }}
        >
          delete
        </button>
      ),
    },
  };

  return (
    <>
      <Table
      // onSort={onSort}
      // selectedSort={selectedSort}
      // columns={columns}
      // data={users}
      >
        <TableHeader {...{ onSort, selectedSort, columns }} />
        <TableBody {...{ columns, data: users }} />
      </Table>
    </>
  );
};

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UsersTable;
