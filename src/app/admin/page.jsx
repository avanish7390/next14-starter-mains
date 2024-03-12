import { Suspense } from "react"
import styles from "./admin.module.css"
import AdminPosts from "@/components/adminPosts/adminPosts"
import AdminPostForm from "@/components/adminPostForm/adminPostForm"
import AdminUsers from "@/components/adminUsers/adminUsers"
import AdminUserForm from "@/components/adminUserForm/adminUserForm"

const AdminPage = ()  => {
    return (
        <div className={styles.container}>
           <div className={styles.row}>
              <div className={styles.col}>
                <Suspense fallback={<div>Loaing...</div>}>
                    <AdminPosts />
                </Suspense>
              </div>
              <div className={styles.col}>
                    <AdminPostForm />
              </div>
           </div>
           <div className={styles.row}>
              <div className={styles.col}>
                <Suspense fallback={<div>Loaing...</div>}>
                    <AdminUsers />
                </Suspense>
              </div>
              <div className={styles.col}>
                    <AdminUserForm />
              </div>
           </div>
        </div>
    )
}

export default AdminPage 