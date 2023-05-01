import React, { FC, useEffect, useState } from "react";

import styles from "./taskAttachments.module.css";
import Image from "next/image";

interface TaskAttachmentsProps {
  attachments: any[];
  setAttachments: React.Dispatch<React.SetStateAction<any[]>>;
}

const TaskAttachments: FC<TaskAttachmentsProps> = ({
  attachments,
  setAttachments,
}: TaskAttachmentsProps) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files!.length > 0) {
      setAttachments([...attachments, ...Array.from(e.currentTarget.files!)]);
    }
  };

  const removeAttachment = (index: number) => {
    let attachmentsCopy = Array.from(attachments);
    attachmentsCopy.splice(index, 1);
    setAttachments(attachmentsCopy);
  };

  return (
    <div className={styles.attachments}>
      <div className={styles.attachments__header}>
        <p className={styles.attachments__label}>Attachments</p>
        <p
          className={styles.attachments__btn}
          onClick={() => {
            fileInputRef.current?.click();
          }}
        >
          Upload
        </p>
        <input
          type="file"
          ref={fileInputRef}
          hidden
          onInput={(e) => handleInput(e)}
          accept="image/png, image/jpeg"
          multiple
        />
      </div>
      <div className={styles.attachments__inner}>
        {attachments?.length < 1 && (
          <div className={styles.attachments__empty}>
            <p>＞﹏＜</p>
            <p>No attachments</p>
          </div>
        )}
        {attachments?.length > 0 && (
          <div className={styles.attachments__images}>
            {attachments.map((attachment, i) => (
              <div className={styles.attachments__attachment} key={i}>
                <img
                  className={styles.attachments__img}
                  src={URL.createObjectURL(attachment)}
                  alt="attachment"
                />
                <span
                  className={styles.attachments__remove}
                  onClick={() => removeAttachment(i)}
                >
                  <Image
                    src={"icons/trash.svg"}
                    alt="remove"
                    width={20}
                    height={20}
                  />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskAttachments;
