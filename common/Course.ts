import type { Ref } from 'vue';

type Lecture = {
  path: string;
  name: string;
  description: string;
  url: string;
};
export type Course = {
  rlt_degree: string;
  rlt_course: string;
  rlt_author: string;
  rlt_description: string;
  rlt_created_at: string;
  rlt_last_updated_at: string;
  lectures: Lecture[];
};

export async function get_json(course: Ref<Course>): Promise<any> {
  let url = '../course.json';
  let obj: Course = { rlt_degree: "", rlt_course: "", rlt_author: "", rlt_description: "", rlt_created_at: "", rlt_last_updated_at: "", lectures: [] };
  try {
    obj = await (await fetch(url)).json();
  }
  catch (e: unknown) {
    console.log("Course json not parsed properly.");
  }
  course.value = obj;
}

