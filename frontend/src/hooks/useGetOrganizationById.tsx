import ApiService from "@/services/ApiService";
import { useState, useEffect } from "react";
export interface OrganizationType {
  id: number;
  name: string;
  creator_id: number;
  created_at: Date;
}

export function useGetOrganizationById(organizationId: number) {
  const [organization, setOrganization] = useState<OrganizationType | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!organization) {
          setLoading(true);
          const _org = await ApiService.getOrganizationById(organizationId);
          setOrganization(_org);
          setLoading(false);
        }
      } catch (error) {
        console.log(error, "Error fetching my groups");
      }
    };
    fetchData();
  }, [organization]);

  return { organization, loading, setOrganization };
}

export default useGetOrganizationById;
