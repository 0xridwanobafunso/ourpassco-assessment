import { createServer } from "miragejs";

export function makeServer() {
  let server = createServer({
    routes() {
      this.namespace = "api";

      this.get("/ping", () => {
        return {
          success: true,
          message: "Mock API up and running",
          data: {},
          code: 200,
        };
      });

      this.get("/company", () => {
        return {
          success: true,
          message: "Company retrieved successfully",
          data: {
            company: {
              name: "Dipa Inhouse",
              email: "hello@dipainhouse.com",
            },
          },
        };
      });

      this.get("/invoices", () => {
        return {
          success: true,
          message: "Invoice retrieved successfully",
          data: {
            invoice: {
              number: "INV-2022-010",
              issued_date: "11 Jan 2020",
              due_date: "11 Jan 2020",
              recepient: {
                name: "Zoky Grizzly",
                company: "Moonlight Agency LTD",
                address: "New York, USA",
              },
            },
          },
          code: 200,
        };
      });

      this.get("/checkout", () => {
        return {
          success: true,
          message: "Checkout retrieved successfully",
          data: {
            account: {
              name: "Barley Vallendito",
              number: "9700 0918 197",
              routing_number: "73827275",
            },
          },
          code: 200,
        };
      });
    },
  });

  return server;
}
