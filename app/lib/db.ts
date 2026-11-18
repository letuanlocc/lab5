import postgres from 'postgres';

// Dùng lại một client duy nhất (kể cả khi hot-reload ở dev) để không vượt
// giới hạn kết nối của Supabase pooler (session mode: 15 clients).
const globalForSql = globalThis as unknown as {
  sql?: ReturnType<typeof postgres>;
};

export const sql =
  globalForSql.sql ??
  postgres(process.env.POSTGRES_URL!, { ssl: 'require', max: 5 });

if (process.env.NODE_ENV !== 'production') globalForSql.sql = sql;
