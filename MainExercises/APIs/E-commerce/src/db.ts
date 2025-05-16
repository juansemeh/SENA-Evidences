import { Pool } from 'pg';

const pool = new Pool({
  host: '127.0.0.1',
  user: 'JuanseMeh',
  password: 'admin',
  database: 'e-commerce',
  port: 5432,
});

export default pool;
