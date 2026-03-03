import { slugify } from "./index.js";
import { describe, it, expect } from "vitest";
describe("slugify", () => {
    it("test basic functionality", () => {
        expect(slugify("Hello World")).toBe("hello-world");
        expect(slugify("HELLO world")).toBe("hello-world");
    });
    it("test multiple separators", () => {
        expect(slugify("hello__world")).toBe("hello-world");
        expect(slugify("hello---world")).toBe("hello-world");
        expect(slugify("hello _ world")).toBe("hello-world");
    });

    it("test the special characters", () => {
        expect(slugify("hello, world!")).toBe("hello-world");
        expect(slugify("hello@world#test")).toBe("helloworldtest");
    });
    it("test edge cases", () => {
        expect(slugify("")).toBe("");
        expect(slugify(" ")).toBe("");
        expect(slugify("---")).toBe("");
        expect(slugify("123 456")).toBe("123-456");
    });
    it("preserves unicode characters", () => {
        expect(slugify("Café au lait")).toBe("café-au-lait");

    });

});