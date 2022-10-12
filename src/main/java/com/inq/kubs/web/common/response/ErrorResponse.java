package com.inq.kubs.web.common.response;

import lombok.Data;

@Data
public class ErrorResponse {

    private boolean success;
    private String code;
    private String message;

    public ErrorResponse(boolean success, String code, String message) {
        this.success = success;
        this.code = code;
        this.message = message;
    }
}
