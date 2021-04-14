import React, { useCallback, useEffect, useState } from "react";
import { LinksList } from "../components/LinksList";
import { Loader } from "../components/Loader";
import { useAuthContext } from "../hooks/authContext.hook";
import { useHttp } from "../hooks/http.hook";

export const LinksPage = () => {
  const [links, setLinks] = useState([]);
  const { request, loading } = useHttp();
  const { token } = useAuthContext();

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request('api/link', 'GET', null, {
        Authorization: `Bearer ${token}`
      });
      setLinks(fetched);
    } catch (e) {

    }
  }, [token, request]);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  if (loading) {
    return <Loader />;
  };

  return (
    <>
      {!loading && <LinksList links={links}/>}
    </>
  )
}
