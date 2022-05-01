import React from 'react';
import './Blog.css'
const Blog = () => {
  return (
    <div className="blog-container">
      <article className="bg-color-top mt-5">
        <h3 className="">Difference between Javascript & NodeJS</h3>
        <p>JavaScript : </p>
        <small>
          Javascript is a Scripting language. It is mostly abbreviated as JS. It
          can be said that Javascript is the updated version of the ECMA script.
          Javascript is a high-level programming language that uses the concept
          of Oops but it is based on prototype inheritance.
          <br />
          <br />
          <li>
            Javascript is a programming language that is used for writing
            scripts on the website.
          </li>
          <li>Javascript can only be run in the browsers.</li>
          <li> It is basically used on the client-side.</li>
          <li>
            Javascript is capable enough to add HTML and play with the DOM.
          </li>
          <li>
            Javascript can run in any browser engine as like JS core in safari
            and Spidermonkey in Firefox.
          </li>
        </small>{" "}
        <br />
        <br />
        <p c>NodeJS : </p>
        <small>
          NodeJS is a cross-platform and opensource Javascript runtime
          environment that allows the javascript to be run on the server-side.
          Nodejs allows Javascript code to run outside the browser. Nodejs comes
          with a lot of modules and mostly used in web development.
          <br />
          <br />
          <li>NodeJS is a Javascript runtime environment.</li>
          <li>
            We can run Javascript outside the browser with the help of NodeJS.
          </li>
          <li>It is mostly used on the server-side.</li>
          <li>Nodejs does not have capability to add HTML tags.</li>
          <li>
            V8 is the Javascript engine inside of node.js that parses and runs
            Javascript.
          </li>
        </small>
      </article>
      <article className="bg-color-mid">
        <h3 className="mt-5">Difference between SQL and NoSQL</h3>
        <p>
          The databases in SQL are table-based, while the databases in NoSQL are
          document, key-value, graph, or wide-column stores. SQL databases suit
          multi-row transactions, while NoSQL is better for unstructured data
          like documents or JSON. Learn more about what is the difference
          between SQL and NoSQL from the table.
        </p>
        <p>
          SQL:
          <li>
            SQL is also pronounced as “S-Q-L” or as “See-Quel” and is primarily
            known to be a Relational Database
          </li>
          <li>
            Use of SQL queries and syntax to analyse and get further data
            insights. Used for OLAP systems
          </li>
          <li>Database, here is in table format</li>
          <li>They are scalable vertically</li>
          <li>
            Total focus on ACID (Atomicity, Consistency, Isolation and
            Durability) properties
          </li>
          <li>SQL uses specialized DB hardware to enhance performance</li>
        </p>
        <p>
          NoSQL:
          <li>NoSQL is a distributed or Non-relational Database</li>
          <li>Apply different types of database technologies</li>
          <li>
            NoSQL databases are document based with key-value pairs and graph
            databases.
          </li>
          <li>Dynamic schema is used for unstructured or disorganised data</li>
          <li>
            Makes use of the Brewer’s CAP theorem (Consistency, Availability and
            Partition Tolerance)
          </li>
          <li>
            Examples are Cassandra, MongoDB, BigTable, Redis, RavenDb, Hbase,
            Neo4j and CouchDb
          </li>
        </p>
      </article>
      <article className="bg-color-btom">
        <h3>What is JWT</h3>
        <p>
          JWT, or JSON Web Token, is an open standard(RFC 7519) set of claims to
          share security information or authorization/authentication requests
          between a client and a server. Each JWT contains encoded JSON objects.
          JWTs are signed using a cryptographic algorithm by the token’s issuer
          to ensure that No one could alter the claims after the token is issued
          and later can be used by the receiving party to verify the token.
        </p>
        <h5>How JWT Works</h5>
        <small>
          JWTs differ from other web tokens in that they contain a set of
          claims. Claims are used to transmit information between two parties.
          What these claims are depends on the use case at hand. For example, a
          claim may assert who issued the token, how long it is valid for, or
          what permissions the client has been granted. A JWT is a string made
          up of three parts, separated by dots (.), and serialized using base64.
          In the most common serialization format, compact serialization, the
          JWT looks something like this: xxxxx.yyyyy.zzzzz. Once decoded, you
          will get two JSON strings: The header and the payload. The signature.
          The JOSE (JSON Object Signing and Encryption) header contains the type
          of token — JWT in this case — and the signing algorithm. The payload
          contains the claims. This is displayed as a JSON string, usually
          containing no more than a dozen fields to keep the JWT compact. This
          information is typically used by the server to verify that the user
          has permission to perform the action they are requesting. There are no
          mandatory claims for a JWT, but overlaying standards may make claims
          mandatory. For example, when using JWT as bearer access token under
          OAuth2.0, iss, sub, aud, and exp must be present. some are more common
          than others. The signature ensures that the token hasn’t been altered.
          The party that creates the JWT signs the header and payload with a
          secret that is known to both the issuer and receiver, or with a
          private key known only to the sender. When the token is used, the
          receiving party verifies that the header and payload match the
          signature.
        </small>
      </article>
    </div>
  );
};

export default Blog;