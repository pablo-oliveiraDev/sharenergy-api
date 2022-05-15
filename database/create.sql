-- Table: public.articles

-- DROP TABLE IF EXISTS public.articles;

CREATE table articles
(
    articleid integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 99999999 CACHE 1 ),
    id integer,
    title character(500) COLLATE pg_catalog."default",
    url character(500) COLLATE pg_catalog."default",
    imageurl character(500) COLLATE pg_catalog."default",
    newssite character(500) COLLATE pg_catalog."default",
    summary character(500) COLLATE pg_catalog."default",
    publishedat character(500) COLLATE pg_catalog."default",
    updatedat character(500) COLLATE pg_catalog."default",
    featured character(100) COLLATE pg_catalog."default",
    launches character(100)[] COLLATE pg_catalog."default",
    events character(100)[] COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.articles
    OWNER to admin;


