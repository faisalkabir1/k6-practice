import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 10,
  duration: "30s",
};

export function setup() {
  console.log("Setup");
}

export default function () {
  console.log("API First Call");
  const response = http.get('https://dev.tuteair.com');
  check(response, { "check api status 200": (r) => r.status == 200 });
  sleep(10);
}

export function teardown(data) {
  console.log("TearDown");
}