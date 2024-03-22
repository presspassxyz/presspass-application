import ApiService from "@/services/ApiService";
import { useState, useEffect } from "react";
import { OrganizationType } from "./useGetOrganizationById";

export function useGetAllOrganizations() {
  const [organizations, setOrganizations] = useState<OrganizationType[] | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!organizations) {
          setLoading(true);
          const _org = await ApiService.getAllOrganizations();
          console.log(_org, "wats org???");
          setOrganizations(_org);
          setLoading(false);
        }
      } catch (error) {
        console.log(error, "Error fetching my groups");
      }
    };
    fetchData();
  }, [organizations]);

  return { organizations, loading, setOrganizations };
}

export default useGetAllOrganizations;
