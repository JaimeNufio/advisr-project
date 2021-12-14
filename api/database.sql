CREATE DATABASE ADVISR;

CREATE TABLE company(
    company_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    category VARCHAR(255)
);

CREATE TABLE campaign(
    campaign_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    budget INTEGER,
    company_id INTEGER REFERENCES company(company_id)
);

CREATE TABLE loc(
    location_id SERIAL PRIMARY KEY,
    lat FLOAT,
    lng FLOAT,
    company_id INTEGER REFERENCES company(company_id)
);