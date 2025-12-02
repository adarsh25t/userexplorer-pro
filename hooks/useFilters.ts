
import { User } from "@/utils/type";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useFilteredUsers = () => {
  const users = useSelector((state: { users: { data: User[] } }) => state.users.data);
  const { search, country, gender } = useSelector((state: any) => state.filters);

  const filteredUsers = useMemo(() => {
    return users.filter((user: User) => {
      const matchesSearch =
        !search ||
        user.name.first.toLowerCase().includes(search.toLowerCase()) ||
        user.name.last.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());

      const matchesCountry = country === "All" || user.location.country === country;
      const matchesGender = gender === "All" || user.gender === gender;

      return matchesSearch && matchesCountry && matchesGender;
    });
  }, [users, search, country, gender]);

  return filteredUsers;
};
