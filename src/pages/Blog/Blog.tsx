import styles from "./Blog.module.css";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "React에서 상태 관리하는 방법",
      slug: "react-state-management",
      summary:
        "useState, useReducer, 그리고 전역 상태 관리 라이브러리까지 정리해봤습니다.",
      date: "2026-02-20",
      views: 42,
    },
    {
      id: 2,
      title: "TypeScript 왜 써야 할까?",
      slug: "why-typescript",
      summary:
        "타입 안정성이 주는 장점과 실제 프로젝트에서 느낀 점을 공유합니다.",
      date: "2026-02-18",
      views: 28,
    },
    {
      id: 3,
      title: "Supabase로 빠르게 백엔드 구축하기",
      slug: "supabase-quick-start",
      summary:
        "Firebase 대안으로 떠오르는 Supabase를 프로젝트에 적용해본 후기입니다.",
      date: "2026-02-15",
      views: 56,
    },
  ];

  return (
    <div className={styles.blog}>
      <h2 className={styles.title}>Blog</h2>
      <p className={styles.subtitle}>개발하면서 배운 것들을 기록합니다</p>

      <div className={styles.postList}>
        {posts.map((post) => (
          <Link
            to={`/blog/${post.slug}`}
            key={post.id}
            className={styles.postCard}
          >
            <h3 className={styles.postTitle}>{post.title}</h3>
            <p className={styles.postSummary}>{post.summary}</p>
            <div className={styles.postMeta}>
              <span>{post.date}</span>
              <span>조회 {post.views}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
