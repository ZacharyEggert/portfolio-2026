interface DBData {
  sales: {
    id: number;
    product: {
      name: string;
      category: string;
      price: number;
      manufacturer: string;
      sku: string;
      tags: string[];
    }[];
    payment: {
      method: string;
      transactionId: string;
      status: string;
      subtotal: number;
      tax: number;
      total: number;
    };
    createdAt: string;
  }[];
}

type Sale = DBData["sales"][number];
type Product = Sale["product"][number];

const products: Record<string, Product> = {
  "001": {
    name: "Product A",
    category: "Category A",
    price: 100,
    manufacturer: "Manufacturer A",
    sku: "SKU001",
    tags: ["tag1", "tag2"],
  },
  "002": {
    name: "Product B",
    category: "Category B",
    price: 200,
    manufacturer: "Manufacturer B",
    sku: "SKU002",
    tags: ["tag3", "tag4"],
  },
  "003": {
    name: "Product C",
    category: "Category B",
    price: 300,
    manufacturer: "Manufacturer A",
    sku: "SKU003",
    tags: ["tag1", "tag4"],
  },
  "004": {
    name: "Product D",
    category: "Category A",
    price: 400,
    manufacturer: "Manufacturer B",
    sku: "SKU004",
    tags: ["tag2", "tag3"],
  },
  "005": {
    name: "Product E",
    category: "Category C",
    price: 500,
    manufacturer: "Manufacturer A",
    sku: "SKU005",
    tags: ["tag1", "tag3"],
  },
};

export class DB {
  private static instance: DB;

  private static data: DBData = {
    sales: [
      {
        id: 1,
        product: [products["001"], products["002"]],
        payment: {
          method: "Credit Card",
          transactionId: "TXN001",
          status: "Completed",
          subtotal: 300,
          tax: 30,
          total: 330,
        },
        createdAt: "2024-01-01",
      },
      {
        id: 2,
        product: [products["003"]],
        payment: {
          method: "PayPal",
          transactionId: "TXN002",
          status: "Completed",
          subtotal: 300,
          tax: 30,
          total: 330,
        },
        createdAt: "2024-01-02",
      },
      {
        id: 3,
        product: [products["004"], products["005"]],
        payment: {
          method: "Credit Card",
          transactionId: "TXN003",
          status: "Completed",
          subtotal: 900,
          tax: 90,
          total: 990,
        },
        createdAt: "2024-01-03",
      },
      {
        id: 4,
        product: [products["001"], products["003"]],
        payment: {
          method: "Credit Card",
          transactionId: "TXN004",
          status: "Completed",
          subtotal: 400,
          tax: 40,
          total: 440,
        },
        createdAt: "2024-01-04",
      },
      {
        id: 5,
        product: [products["002"], products["004"]],
        payment: {
          method: "PayPal",
          transactionId: "TXN005",
          status: "Completed",
          subtotal: 600,
          tax: 60,
          total: 660,
        },
        createdAt: "2024-01-05",
      },
    ],
  };

  public async getSales() {
    await new Promise((resolve) => setTimeout(resolve, 180)); // Simulate async operation
    return DB.data.sales;
  }

  private constructor() {}

  public static getInstance(): DB {
    if (!DB.instance) {
      DB.instance = new DB();
    }
    return DB.instance;
  }
}

export default DB.getInstance();
