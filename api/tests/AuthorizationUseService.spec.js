import { test, vi, expect } from "vitest";
import { storeAuthorizationUse } from "../AuthorizationUseService";

const authorizationUse = new FormData()
authorizationUse.append("requestId", "12345");

test("storeAuthorizationUse should call fetch with correct parameters", async () => {
  const mockFetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    })
  );
  global.fetch = mockFetch;

  await storeAuthorizationUse(authorizationUse);

  expect(mockFetch).toHaveBeenCalledWith(
    expect.stringContaining("/requests/store"),
    expect.objectContaining({
      method: "POST",
      headers: expect.any(Object),
      body: authorizationUse,
    })
  );
});

test("storeAuthorizationUse should return response data on success", async () => {
  const mockResponseData = { success: true };
  const mockFetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResponseData),
    })
  );
  global.fetch = mockFetch;

  const result = await storeAuthorizationUse(authorizationUse);

  expect(result).toEqual(mockResponseData);
});

test("storeAuthorizationUse should return response data on success false", async () => {
  const mockResponseData = { success: false };
  const mockFetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResponseData),
    })
  );
  global.fetch = mockFetch;

  const result = await storeAuthorizationUse(authorizationUse);

  expect(result).toEqual(mockResponseData);
});

test("storeAuthorizationUse should throw an error on fetch failure", async () => {
  const mockFetch = vi.fn(() =>
    Promise.resolve({
      ok: false,
      statusText: "Internal Server Error",
    })
  );
  global.fetch = mockFetch;

  await expect(storeAuthorizationUse(authorizationUse)).rejects.toThrow(
    "Error storing authorization use: Internal Server Error"
  );
});
