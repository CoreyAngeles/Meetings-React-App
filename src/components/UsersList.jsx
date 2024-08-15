import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import SearchStatus from "./SearchStatus";
import paginate from "../utils/paginate";
import api from "../api";
import GroupList from "./GroupList";
import UsersTable from "./UsersTable";
import _ from "lodash";

const UsersList = () => {
  const pageSize = 8;
  const [professions, setProfessions] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProf, setSelectedProf] = useState();
  const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
  // ======================================
  const [users, setUsers] = useState();

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  }, []);

  const handleDelete = (userId) => {
    setUsers(
      users.filter((user) => {
        return user._id !== userId;
      })
    );
  };
  const handleToggleBookMark = (id) => {
    const copyUsers = [...users];
    const user = copyUsers.findIndex((user) => user._id === id);
    copyUsers[user].bookmark = !copyUsers[user].bookmark;
    setUsers(copyUsers);
  };

  // ================================

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);

  const handleProfessionsSelect = (item) => {
    setSelectedProf(item);
    // console.log(selectetProf);
  };

  const handlePageChange = (pageIndex) => {
    // console.log("Page:", pageIndex);
    setCurrentPage(pageIndex);
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  const clearFilter = () => {
    setSelectedProf();
  };

  if (users) {
    const filteredUsers = selectedProf
      ? users.filter((user) => user.profession._id === selectedProf._id)
      : users;
    const count = filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
    const userCrop = paginate(sortedUsers, currentPage, pageSize);
    return (
      <div className="d-flex">
        {professions && (
          <div className="d-flex flex-column flex-shrink-0 p-3">
            <GroupList
              selectedItem={selectedProf}
              items={professions}
              valueProperty="_id"
              contentProperty="name"
              onItemSelect={handleProfessionsSelect}
            />
            <button className="btn btn-secondary mt-2" onClick={clearFilter}>
              Очистить
            </button>
          </div>
        )}
        <div className="d-flex flex-column">
          <SearchStatus length={count} />
          {count > 0 && (
            <UsersTable
              users={userCrop}
              onDelete={handleDelete}
              onToggleBookMark={handleToggleBookMark}
              onSort={handleSort}
              selectedSort={sortBy}
            />
          )}
          <div className="d-flex justify-content-center">
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
  return "Loading...";
};

export default UsersList;
