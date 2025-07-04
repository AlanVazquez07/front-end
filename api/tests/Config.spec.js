import { test, expect } from "vitest";
import { getHeaders } from "../Config";

sessionStorage.setItem('grp_token', 'test_token'); // Simular que hay un token en sessionStorage

test("getHeaders should return headers without token when includeToken is false", () => {
  const headers = getHeaders(false);
  expect(headers).toEqual({
    'Accept': 'application/json',
  });
});

test("getHeaders should return headers with token when includeToken is true", () => {
  const headers = getHeaders(true);
  expect(headers).toHaveProperty('Authorization');
  expect(headers['Authorization']).toMatch(/^Bearer /);
});

test("getHeaders should return headers with correct token from sessionStorage", () => {
  const headers = getHeaders(true);
  const token = sessionStorage.getItem('grp_token');
  expect(headers['Authorization']).toBe(`Bearer ${token}`);
});

test("getHeaders should not include Authorization header when sessionStorage is empty", () => {
  sessionStorage.removeItem('grp_token'); // Asegurarse de que no haya token
  const headers = getHeaders(true);
  expect(headers).not.toHaveProperty('Authorization');
});