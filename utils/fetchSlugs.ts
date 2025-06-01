export async function getAllPageSlugs() {
  const apiBaseUrl = process.env.API_BASE_URL;
  const apiKey = process.env.API_KEY;
  const slugs: string[] = [];
  let currentPage = 1;
  const perPage = 100;

  while (true) {
    const url = `${apiBaseUrl}/api/collections/page/content?page=${currentPage}&perPage=${perPage}`;

     const res = await fetch(url, {
      method: 'GET',
      headers: {
          'X-API-Key': apiKey || '',
          Accept: 'application/json'
      }
    })

    if (!res.ok) {
      throw new Error(
        `API-Request fehlgeschlagen (Status ${res.status}) auf Seite ${currentPage}`
      );
    }

    const json = (await res.json()) as {
      success: boolean;
      data: Array<{
        id: number;
        created_at: string;
        updated_at: string;
        values: {
          slug: { id: number; value: string; field_type: string };
          name: { id: number; value: string; field_type: string };
          modules?: Array<{
            id: number;
            value: string;
            field_type: string;
            collection: {
              id: number;
              name: string;
              alias: string;
            };
          }>;
        };
      }>;
      meta: { timestamp: string };
      pagination: {
        page: number;
        per_page: number;
      };
    };

    const items = json.data;
    if (!items || items.length === 0) {
      break;
    }

    for (const item of items) {
      let raw = item.values.slug.value?.trim() || "";
      if (!raw) {
        raw = "/";
      } else if (!raw.startsWith("/")) {
        raw = "/" + raw;
      }
      slugs.push(raw);
    }

    if (items.length < perPage) {
      break;
    }

    currentPage += 1;
  }

  return Array.from(new Set(slugs));
}
