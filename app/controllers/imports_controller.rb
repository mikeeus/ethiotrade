class ImportsController < ApplicationController
  # before_action :set_import, only: [:show, :update, :destroy]

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_import
      @import = Import.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def import_params
      params.fetch(:import, {})
    end
end
