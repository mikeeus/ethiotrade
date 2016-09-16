--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.4
-- Dumped by pg_dump version 9.5.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: hscodes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE hscodes (
    id integer NOT NULL,
    code integer NOT NULL,
    description character varying NOT NULL,
    unit character varying DEFAULT 'UN'::character varying NOT NULL,
    special_permission character varying DEFAULT 'None'::character varying NOT NULL,
    duty integer DEFAULT 0 NOT NULL,
    excise integer DEFAULT 0 NOT NULL,
    vat integer DEFAULT 0 NOT NULL,
    sur integer DEFAULT 0 NOT NULL,
    withhold integer DEFAULT 0 NOT NULL,
    ss1 integer DEFAULT 0 NOT NULL,
    ss2 integer DEFAULT 0 NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: hscodes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE hscodes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: hscodes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE hscodes_id_seq OWNED BY hscodes.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE schema_migrations (
    version character varying NOT NULL
);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY hscodes ALTER COLUMN id SET DEFAULT nextval('hscodes_id_seq'::regclass);


--
-- Name: ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: hscodes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY hscodes
    ADD CONSTRAINT hscodes_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: index_hscodes_on_code; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_hscodes_on_code ON hscodes USING btree (code);


--
-- Name: index_hscodes_on_description; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_hscodes_on_description ON hscodes USING btree (description);


--
-- PostgreSQL database dump complete
--

SET search_path TO "$user", public;

INSERT INTO schema_migrations (version) VALUES ('20160916154634');


